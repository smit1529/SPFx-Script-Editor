import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IScriptEditorWebPartProps } from './IScriptEditorWebPartProps';
export default class ScriptEditorWebPart extends BaseClientSideWebPart<IScriptEditorWebPartProps> {
    save: (script: string) => void;
    render(): Promise<void>;
    protected readonly dataVersion: Version;
    private evalScript(elem);
    private nodeName(elem, name);
    private executeScript(element);
}
