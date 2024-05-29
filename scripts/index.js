class Expand 
{
    constructor() 
    {
        this.pNodeList = document.querySelectorAll('p');
        this.imageNodeList = document.querySelectorAll('.content-section img');
        this.imageNodeList.forEach((image, index) => 
        {
            image.addEventListener('click', () =>
            {
                pNodeList[this.index].style.display = 'flex';
            });
        })
    }

}

const test = new Expand();
