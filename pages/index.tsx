import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';

type Draw = (context: CanvasRenderingContext2D) => void;

const resizeCanvas = (canvas: HTMLCanvasElement) => {
    // Lookup the size the browser is displaying the canvas in CSS pixels
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    // Check if the canvas is the same size
    const correctSize =
        canvas.width === displayWidth && canvas.height === displayHeight;

    if (correctSize) {
        return;
    }

    // Make the canvas the same size
    canvas.width = displayWidth;
    canvas.height = displayHeight;
};

const useCanvas = (draw: Draw) => {
    const canvasRef = useRef<HTMLCanvasElement>(null!);

    useEffect(() => {
        const context = canvasRef.current.getContext('2d')!;
        let animationFrameId: number;

        const render = () => {
            resizeCanvas(canvasRef.current);
            draw(context);
            animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, [draw]);

    return canvasRef;
};

const Home: NextPage = () => {
    const canvasRef = useCanvas((context) => {
        context.fillStyle = 'orange';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    });

    return (
        <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh' }}>
            Hello world!
        </canvas>
    );
};

export default Home;
