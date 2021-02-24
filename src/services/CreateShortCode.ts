import { v4 as uuidv4 } from "uuid";

function getRandomValue(max: number, min: number ) {
    return Math.round(Math.random() * (max - min) + min);
}
export default function createShortCode() {
    const uuid = uuidv4();
    const regExp = new RegExp('-','g');
    const uuidClean = uuid.toString().replace(regExp,'');    
    const valueRandom = getRandomValue(10, 5)
    return uuidClean.substring(0, valueRandom);
}