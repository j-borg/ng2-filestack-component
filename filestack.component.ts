import { Component, Input } from '@angular/core';
var scss = require('./imageUpload.scss');

declare var filepicker: any;

@Component({
    selector: 'image-upload',
    styles: [`${scss}`],
    template: require('./imageUpload.component.html')
})

export class ImageUploadComponent {
    @Input() content: any;
    @Input() dimension: string;

    constructor() {
        filepicker.setKey(process.ENV.APIKEY);
    }

    selectImage() {
        filepicker.pick(
            {
                cropRatio: this.dimension,
                cropForce: true,
                mimetype: 'image/*',
                container: 'window',
                services: ['CONVERT', 'COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'GOOGLE_DRIVE', 'DROPBOX'],
                conversions: ['crop']
            },
            (blob: any) => this.image = blob.url,
            (error: any) => console.log(error.toString()));
    }
}
