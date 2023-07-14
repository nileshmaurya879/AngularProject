export class LineNumberFormate{
    lineNumberFormatId:string;
    name:string;
    isDefault:boolean;
    AllowFreeForm:boolean
    Sections:linearFormateSection[]
}

export class LineNumberFormateSectionType{
    LineNumberFormatSectionTypeId:string;
    Index:number;
    name:string
}

export class linearFormateSection{
    LineNumberFormatSectionId:string;
    LineNumberFormatId:string;
    Index:number;
    Name:string;
    Type:LineNumberFormateSectionType
}