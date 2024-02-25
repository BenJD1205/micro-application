"use client";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

interface CanvasProps {
	params: {
		boardId: string;
	};
}

export const Canvas = ({ params }: CanvasProps) => {
	return (
		<main className="h-full w-full relative bg-neutral-100 touch-none">
			<Info boardId={params.boardId} />
			<Participants />
			<Toolbar />
		</main>
	);
};
