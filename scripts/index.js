class Expand 
{
    constructor() 
    {
        this.pNodeList = document.querySelectorAll('.content-card > p');
        this.imageNodeList = document.querySelectorAll('.content-section > img');
        this.firstImage = document.querySelector('.first-image');
        this.headerNodeList = document.querySelectorAll('.content-section > .header');

        this.pNodeList.forEach(paragraphIndex => 
        {
            paragraphIndex.style.display = 'none';
        });
        this.imageNodeList.forEach(imageIndex => 
        {
            imageIndex.src = './assets/images/icon-plus.svg';
        });
        this.headerNodeList.forEach(imageIndex => 
        {
            imageIndex.src = './assets/images/icon-plus.svg';
        });
    }

    initFirstHeader()
    {
        addEventListener('load', () => 
        {
            document.querySelector('.first-image').click()
        })
    }

    nodeSelector()
    {
        this.imageNodeList.forEach((image, index) =>
        {      
            image.addEventListener('click', () => 
            {
                this.expand(index)
            });
        });

        this.headerNodeList.forEach((header, index) =>
        {          
            header.addEventListener('click', () => 
            {
                this.expand(index)
            });
        });
    }

    expand(index) 
    {     
        const paragraphIndex = this.pNodeList[index];
        const imageIndex = this.imageNodeList[index];    
        if (paragraphIndex.style.display === 'none') 
        {
            imageIndex.src = './assets/images/icon-minus.svg';
            paragraphIndex.style.display = 'flex';
        } 
        else 
        {
            imageIndex.src = './assets/images/icon-plus.svg';
            paragraphIndex.style.display = 'none';
        }
    }
}

const expandElement = new Expand();
expandElement.nodeSelector();
expandElement.initFirstHeader();
