import { Component, Input } from '@angular/core';
var scss = require('./filestack.scss');

declare var filepicker: any;

@Component({
    selector: 'filestack-button',
    styles: [`${scss}`],
    template: require('./filestack.component.html')
})

export class FilestackComponent {
    @Input() image: any;

    constructor() {
        filepicker.setKey(process.env.APIKEY);
    }

    selectImage() {
        filepicker.pick(
            {
                mimetype: 'image/*',
                container: 'window',
                services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'GOOGLE_DRIVE', 'DROPBOX']
            },
            function (Blob: any) {
                this.image = Blob;
            }.bind(this),
            function (FPError: any) {
                console.log(FPError.toString());
            }.bind(this));
    }

}
