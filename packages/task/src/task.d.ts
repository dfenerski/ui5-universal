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
export default function ({ dependencies, log, options, taskUtil, workspace, }: {
    dependencies: any;
    log: any;
    options: any;
    taskUtil: any;
    workspace: any;
}): Promise<void>;
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
export declare function determineRequiredDependencies({ availableDependencies, getDependencies, getProject, options, }: {
    availableDependencies: Set<string>;
    getDependencies: Function;
    getProject: Function;
    options: any;
}): Promise<Set<string>>;
