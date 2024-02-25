"use client";

import { useState, useEffect, FormEventHandler } from "react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useRenameModal } from "@/store/use-rename-modal";
import { api } from "@/convex/_generated/api";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogClose,
	DialogFooter,
	DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const RenameModal = () => {
	const { mutate, pending } = useApiMutation(api.board.update);
	const { isOpen, onClose, initialValues } = useRenameModal();
	const [title, setTitle] = useState(initialValues.title);

	const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		mutate({
			id: initialValues.id,
			title,
		})
			.then(() => {
				toast.success("Board renamed");
				onClose();
			})
			.catch(() => toast.error("Failed to rename"));
	};

	useEffect(() => {
		setTitle(initialValues.title);
	}, [initialValues.title]);

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit board title</DialogTitle>
				</DialogHeader>
				<DialogDescription>Enter a new title for this board</DialogDescription>
				<form className="space-y-4" onSubmit={onSubmit}>
					<Input
						disabled={pending}
						required
						maxLength={60}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Board title"
					/>
					<DialogFooter>
						<DialogClose asChild>
							<Button type="button" variant="outline">
								Cancel
							</Button>
						</DialogClose>
						<Button disabled={pending} type="submit">
							Save
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};
