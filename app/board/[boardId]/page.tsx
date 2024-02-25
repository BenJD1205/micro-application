import React from "react";
import { Canvas } from "./_component/canvas";
import { Loading } from "./_component/loading";
import { Room } from "@/components/room";

interface BoardIdPageProps {
	params: {
		boardId: string;
	};
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
	return (
		<Room roomId={params.boardId} fallback={<Loading />}>
			<Canvas params={params} />
		</Room>
	);
};

export default BoardIdPage;
