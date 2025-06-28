import * as fs from 'fs';
import path from 'path';

const ASSET_DIRECTORY = path.resolve(__dirname, '../../assets/photos')

export default function getAssetFiles() {
    let fileArray = fs.readdirSync(ASSET_DIRECTORY);
    const index = fileArray.indexOf('.DS_Store');
    if (index > -1) {
        fileArray.splice(index, 1);
    }
    return fileArray.reduce((accumulator : Array<any>, current: string) => {
        let fileBreakdown = current.split('.');
        const temp = {
            fileName: current,
            shortName:fileBreakdown[0],
            isVid: fileBreakdown[1].toLowerCase() === 'mp4' ? true : false,
            isHeic: fileBreakdown[1].toLowerCase() === 'heic' ? true : false,
        }
        accumulator.push(temp);
        return accumulator

    }, []);
};
