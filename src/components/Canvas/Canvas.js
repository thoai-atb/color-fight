import {useState, useRef, useEffect} from 'react'
import './canvas.css'
import colorlist from '../../data/colorlist.json'

const Canvas = ({model, selectedTeam}) => {
    const [canvasRef] = useState(useRef(null));
    const [mouseInfo] = useState({
        pressing: false,
        x: 0,
        y: 0
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        let requestID;
        const loop = () => {
            let nextFrame = ctx.createImageData(canvas.width, canvas.height);
            for(let index = 0; index<model.matrix.length; index++) {
                let i = index * 4;
                let team = model.getTeam(index);
                let r = team === 0 ? 1 : (model.getLevelNorm(index) + 3) / 4;
                let [red, green, blue] = colorlist[team];
                nextFrame.data[i] = red * r;
                nextFrame.data[i+1] = green * r;
                nextFrame.data[i+2] = blue * r;
                nextFrame.data[i+3] = 255;
            }
            ctx.putImageData(nextFrame, 0, 0);
            requestID = requestAnimationFrame(loop);
        };

        loop();

        return () => {
            cancelAnimationFrame(requestID);
        }
    }, [canvasRef, model])

    // eslint-disable-next-line
    const getCanvas = () => {
        return canvasRef.current;
    }

    // eslint-disable-next-line
    const getContext = () => {
        return canvasRef.current.getContext('2d');
    }

    const getMousePos = (evt) => {
        var rect = canvasRef.current.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
    }

    const mouseMove = (e) => {
        let point = getMousePos(e);
        mouseInfo.x = Math.floor(point.x);
        mouseInfo.y = Math.floor(point.y);
        if(mouseInfo.pressing)
            model.put(selectedTeam, mouseInfo.x, mouseInfo.y);
    }

    const mouseDown = (e) => {
        mouseInfo.pressing = true;
    }

    const mouseUp = (e) => {
        mouseInfo.pressing = false;
    }
    
    return (
        <div className='canvasWrap'>
            <canvas ref={canvasRef} onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={mouseMove} width={model.width} height={model.height}></canvas>
        </div>
    )
}

export default Canvas
