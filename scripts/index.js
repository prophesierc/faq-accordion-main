class Expand 
{
    
    constructor() 
    {
        this.pNodeList = document.querySelectorAll('.content-card > p');
        this.imageNodeList = document.querySelectorAll('.content-section > img');
        this.pNodeList.forEach(paragraphIndex => {
            paragraphIndex.style.display = 'none';
        });
        this.imageNodeList.forEach(imageIndex => {
            imageIndex.src = '/assets/images/icon-plus.svg';
        });
    }

    expand() 
    {        
        this.imageNodeList.forEach((image, index) => 
        {            
            image.addEventListener('click', () => 
            {    
                const paragraphIndex = this.pNodeList[index];
                const imageIndex = this.imageNodeList[index];    
                if (paragraphIndex.style.display === 'none') 
                {
                    imageIndex.src = '/assets/images/icon-minus.svg';
                    paragraphIndex.style.display = 'flex';
                } 
                else 
                {
                    imageIndex.src = '/assets/images/icon-plus.svg';
                    paragraphIndex.style.display = 'none';
                }
            });
        });
    }
}

const expandElement = new Expand();
expandElement.expand();
