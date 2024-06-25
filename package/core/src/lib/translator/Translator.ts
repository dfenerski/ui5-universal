export abstract class Translator<SrcType, TargetType> {
    public abstract translate(src: SrcType): TargetType;
}
