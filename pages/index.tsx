import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';

type Canvas = HTMLCanvasElement;
type Context = CanvasRenderingContext2D;
type Draw = (context: Context) => void;

const correctCanvasSize = (canvas: Canvas) => {
    // Lookup the size the browser is displaying the canvas in CSS pixels
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    // Check if the canvas is the same size
    if (canvas.width === displayWidth && canvas.height === displayHeight) {
        return;
    }

    // Make the canvas the same size
    canvas.width = displayWidth;
    canvas.height = displayHeight;
};

const useCanvas = (draw: Draw) => {
    // This should be assigned to a <canvas> element later
    const canvasRef = useRef<Canvas | null>(null);

    useEffect(() => {
        // Try to get the context
        const context = canvasRef.current?.getContext('2d');
        // Store so we can cancel it later
        let animationFrameId: number;

        const render = () => {
            // Only if we have a canvas and context
            if (context) {
                // Ensure the canvas size is correct before drawing anything
                correctCanvasSize(context?.canvas);
                // The caller provides the drawing function
                draw(context);
            }

            // Reschedule the render
            animationFrameId = requestAnimationFrame(render);
        };
        // Jump-start the render loop
        render();

        // When unmount cancel the next render
        return () => cancelAnimationFrame(animationFrameId);
    }, [draw]);

    // Give to the caller so they can assign it to a <canvas>
    return canvasRef;
};

const drawRect = (
    context: Context,
    rect: {
        x: number;
        y: number;
        width: number;
        height: number;
        style: string;
    },
) => {
    context.fillStyle = rect.style;
    context.fillRect(rect.x, rect.y, rect.width, rect.height);
};

const draw: Draw = (context) => {
    drawRect(context, {
        x: 0,
        y: 0,
        width: context.canvas.width,
        height: context.canvas.height,
        style: 'orange',
    });
};

const Home: NextPage = () => {
    const canvasRef = useCanvas(draw);

    return (
        <>
            <canvas ref={canvasRef} />
            <style jsx>{`
                canvas {
                    width: 100vw;
                    height: 100vh;
                }
            `}</style>
        </>
    );
};

export default Home;
