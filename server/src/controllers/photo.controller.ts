import {Request, Response} from 'express';
import getAssetFiles from '../services/photos.service';
import path from 'path';

const assetDirectory = path.resolve(__dirname, '../..')

export default {
    getPhotosList: (req: Request, res: Response) => {
        res.send(getAssetFiles());
    },
    getIndividualPhoto: (req: Request, res: Response) => {
        res.sendFile(assetDirectory + "/assets/photos/" + req.params.photo_id, { headers: { "Content-Type": "image/jpg"} });
    }
};