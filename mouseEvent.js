//不同的变化：
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//event:
//clearBtn.addEventListener('click', runEvent);
//clearBtn.addEventListener('dblclick', runEvent);

//mouseDown:
//clearBtn.addEventListener('mousedown', runEvent);
//mouseUp:
//clearBtn.addEventListener('mouseup', runEvent);

//mouseEnter:
//card.addEventListener('mouseenter', runEvent);

//mouseLeave:
//card.addEventListener('mouseleave', runEvent);

//mouseOver a d mouseOut:
//card.addEventListener('mouseout', runEvent);

//mouseMove:
card.addEventListener('mousemove', runEvent);
//event handler:
function runEvent(e) {

    console.log(`Event type: ${e.type}`);
    e.preventDefault();
    heading.textContent = `mouseX: ${e.offsetX}, mouseY: ${e.offsetY}`;
    //红绿蓝调色板rgb(red, green, blue)Each parameter defines the intensity of the color as an integer between 0 and 255
    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 20)`;
}