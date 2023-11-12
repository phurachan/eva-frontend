export class TabData {
    name?: string;
    code?: string;
    icon?: string;
    
    constructor(params: Partial<TabData>) {
        Object.assign(this, params);
    }
}