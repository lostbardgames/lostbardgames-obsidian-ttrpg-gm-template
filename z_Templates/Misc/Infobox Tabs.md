---
art: z_Assets/Misc/PlaceholderImage.png
art1: z_Assets/Parties/MotleyFew.png
banner: off
---



> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- Art
>> #### Art
>>  |
>> ---|---|
>> **Art 0** | `INPUT[imageSuggester(optionQuery("")):art]` |
>> **Art 1** | `INPUT[imageSuggester(optionQuery("")):art1]` |
>> **Banner** |`INPUT[toggle(onValue(on), offValue(off)):banner]` |
>

> [!infobox]+
> # `=this.file.name`
>```meta-bind
>INPUT[select(
>option(1, Tab 1),
>option(2, Tab 2),
>class(tabbed)
>)]
>```
>
>> [!tabbed-box]
>> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
>>
>> `VIEW[!\[\[{art1}\]\]][text(renderMarkdown)]`
>
> ###### Bio
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |