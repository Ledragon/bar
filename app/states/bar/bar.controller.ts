export class BarController {
    public static controllerId = 'bar';
    public bottles: bottle[] = [
        {
            name: 'The Dalmore 15years',
            type: 'Whisky',
            comment: 'yummy',
            imageUrl: 'https://img.thewhiskyexchange.com/540/dlmob.15yo.jpg'
        },
        {
            name: 'Singleton',
            type: 'Whisky',
            comment: 'Pour l\'apero',
            imageUrl: 'http://ecx.images-amazon.com/images/I/51oQSk1G5-L._AC_UL320_SR280,320_.jpg'
        }]
}

interface bottle {
    name: string;
    type: string;
    comment?: string;
    imageUrl?: string;
}
