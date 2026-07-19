export function generateDOB() {
        const year = 1970 + Math.floor(Math.random() * 30);
        const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
        const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');

        return `${year}-${month}-${day}`;
}

export function generatePhoneNumber(){

        let number = '01';
        for(let i = 0; i < 8;i++){
            number+=Math.floor(Math.random()*10);

        }
        return number;
}
       

