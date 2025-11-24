import { Button } from "./ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";
import { Textarea } from "./ui/textarea";

export default function NewItemDialog() {
    return (
        <DialogContent className="lg:max-w-2xl">
            <DialogHeader>
                <DialogTitle>Add New Item</DialogTitle>
                <DialogDescription></DialogDescription>
            </DialogHeader>

            <ScrollArea className="w-full max-h-100 pr-5">
                <div className="flex gap-4 flex-col p-5">
                    <Label htmlFor="imageInput">Image:</Label>
                    <Input type="file" id="imageInput" />

                    <Label htmlFor="itemName">Name:</Label>
                    <Input type="" id="itemName" />

                    <Label htmlFor="description">Description:</Label>
                    <Textarea id="description" />

                    <Label htmlFor="specs">Specification:</Label>
                    <Textarea id="specs" />

                    <div className="grid grid-cols-3 gap-2">
                        <Label htmlFor="price">Price:</Label>
                        <Label htmlFor="stocks">Stocks:</Label>
                        <Label htmlFor="rating">Rating:</Label>

                        <Input id="price" type="number" placeholder="e.g. 79.99"></Input>
                        <Input id="stocks" type="number" placeholder="e.g. 120"></Input>
                        <Input id="rating" type="number" min={1} max={5} placeholder="1-5"></Input>
                    </div>

                    <Label htmlFor="itemName">Category:</Label>
                    <Input type="text" id="itemName" placeholder="e.g. Wearables, Desktop, Laptop, Phone" />
                </div>
            </ScrollArea>

            <DialogFooter>
                <Button>Add Product</Button>
                <Button variant={"secondary"}>Clear</Button>
            </DialogFooter>
        </DialogContent>
    )
}