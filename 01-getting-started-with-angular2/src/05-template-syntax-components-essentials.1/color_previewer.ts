
import {Component, Input} from "@angular/core";

@Component({
    selector: 'color-previewer',
    template: `
                <div class="color-previewer" [ngStyle]="{color:colorPreview}">
                    Preview Text Color
                </div>
            `
})
export class ColorPreviewer {

    @Input()
    colorPreview:string;

}
