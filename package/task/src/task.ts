/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

import {
    Browser,
    Device,
    OS,
    PolyfillRegistry,
    PreRenderer,
} from '@ui5-universal/core';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { stdin } from 'process';
import { Worker } from 'worker_threads';

/**
 * Custom task API
 *
 * @param {object} parameters
 *
 * @param {module:@ui5/fs.AbstractReader} parameters.dependencies
 *      Reader to access resources of the project's dependencies
 * @param {@ui5/logger/Logger} parameters.log
 *      Logger instance for use in the custom task.
 *      This parameter is only available to custom task extensions
 *      defining Specification Version 3.0 and later.
 * @param {object} parameters.options Options
 * @param {string} parameters.options.projectName
 *      Name of the project currently being built
 * @param {string} parameters.options.projectNamespace
 *      Namespace of the project currently being built
 * @param {string} parameters.options.configuration
 *      Custom task configuration, as defined in the project's ui5.yaml
 * @param {string} parameters.options.taskName
 *      Name of the custom task.
 *      This parameter is only provided to custom task extensions
 *      defining Specification Version 3.0 and later.
 * @param {@ui5/builder.tasks.TaskUtil} parameters.taskUtil
 *      Specification Version-dependent interface to a TaskUtil instance.
 *      See the corresponding API reference for details:
 *      https://sap.github.io/ui5-tooling/v3/api/@ui5_project_build_helpers_TaskUtil.html
 * @param {module:@ui5/fs.DuplexCollection} parameters.workspace
 *      Reader/Writer to access and modify resources of the
 *      project currently being built
 * @returns {Promise<undefined>}
 *      Promise resolving once the task has finished
 */
export default async function ({
    dependencies,
    log,
    options,
    taskUtil,
    workspace,
}: {
    dependencies: any;
    log: any;
    options: any;
    taskUtil: any;
    workspace: any;
}): Promise<void> {
    // https://github.com/SAP/ui5-tooling/issues/490
    taskUtil.registerCleanupTask(async () => {
        const APP_DIST = path.join(
            __dirname,
            '..',
            '..',
            '..',
            '..',
            'example',
            'app',
            'com.github.dfenerski.ui5_universal.static_app',
            'dist',
        );
        const worker = new Worker(path.resolve(__dirname, 'worker.js'));
        // const [indexResource] = await workspace.byGlob('**/index.html');
        // const indexHtml = await indexResource.getString();
        const indexHtml = readFileSync(
            path.join(APP_DIST, 'index.html'),
            'utf8',
        );
        // Server errors sometimes occur if this is not done before rendering takes place
        console.error('PLEASE RESET CHROME HSTS');
        stdin.setRawMode(true);
        await new Promise<void>((r) =>
            stdin.once('data', () => {
                stdin.setRawMode(false);
                r();
            }),
        );
        console.error('CHROME HSTS RESET CONFIRMED');
        // Bootstrap
        const renderer = new PreRenderer({
            // initialContent: '<div id="app"></div>',
            initialContent: indexHtml,
            // polyfills: [],
            polyfills: PolyfillRegistry.get(
                Device.DESKTOP,
                OS.WINDOWS,
                Browser.CHROME,
            ),
            userAgent:
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        });
        // Wait for main view after rendering event
        await new Promise<void>((resolve) => {
            (<any>renderer.getDomWindow()).addEventListener(
                'ui5ViewRendered',
                resolve,
                {
                    once: true,
                },
            );
        });
        // Dump rendered DOM
        const renderedHTML = renderer.render();
        console.error(`RENDERED: ${renderedHTML}`);
        //
        writeFileSync(
            path.join(APP_DIST, 'index.html'),
            indexHtml
                .replace(
                    `<div id="sap-ui-ssr"></div>`,
                    `<div id="sap-ui-ssr">${renderedHTML}</div>`,
                )
                .replace(
                    `<meta http-equiv="Pragma" content="no-cache" />`,
                    `<meta http-equiv="Pragma" content="no-cache" /><link href="resources/sap/ui/core/themes/sap_horizon/library.css" rel="stylesheet" /> <link href="resources/sap/m/themes/sap_horizon/library.css" rel="stylesheet" />`,
                ),
            'utf8',
        );
        //
        console.error('WRITE OK, TERMINATING');
        //
        worker.terminate();
        // const filePath = indexResource.getPath();
        // const fileName = indexResource.getName();
        // await workspace.write(
        //     taskUtil.resourceFactory.createResource({
        //         path: filePath,
        //         string: 'REPLACED CONTENT',
        //     }),
        // );
        //
        // nodeServer.close();
    });
}

/**
 * Callback function to define the list of required dependencies
 *
 * @param {object} parameters
 * @param {Set} parameters.availableDependencies
 *      Set containing the names of all direct dependencies of
 *      the project currently being built.
 * @param {function} parameters.getDependencies
 *      Identical to TaskUtil#getDependencies
 *         (see https://sap.github.io/ui5-tooling/v3/api/@ui5_project_build_helpers_TaskUtil.html).
 *      Creates a list of names of all direct dependencies
 *      of a given project.
 * @param {function} parameters.getProject
 *      Identical to TaskUtil#getProject
 *         (see https://sap.github.io/ui5-tooling/v3/api/@ui5_project_build_helpers_TaskUtil.html).
 *      Retrieves a Project-instance for a given project name.
 * @param {object} parameters.options
 *      Identical to the options given to the standard task function.
 * @returns {Promise<Set>}
 *      Promise resolving with a Set containing all dependencies
 *      that should be made available to the task.
 *      UI5 Tooling will ensure that those dependencies have been
 *      built before executing the task.
 */
export async function determineRequiredDependencies({
    availableDependencies,
    getDependencies,
    getProject,
    options,
}: {
    availableDependencies: Set<string>;
    getDependencies: Function;
    getProject: Function;
    options: any;
}): Promise<Set<string>> {
    console.error('DETERMINE REQUIRED DEPENDENCIES');
    // "availableDependencies" could look like this: Set(3) { "sap.ui.core", "sap.m", "my.lib" }
    availableDependencies.forEach((depName: string) => {
        // Reduce list of required dependencies: Do not require any UI5 framework projects
        // if (getProject(depName).isFrameworkProject()) {
        availableDependencies.delete(depName);
        // }
    });
    //
    return availableDependencies;
}
