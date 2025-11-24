import { Button } from ".//ui/button"
import { Trash } from "lucide-react";
import { DialogContent, DialogHeader, DialogDescription, DialogTitle } from "./ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table";
import type { IProduct } from "@/db/productDb";

interface cartProps {
    cart: IProduct[];
    quantityOnChange: (id: number, value: number) => void;
    removeFromCart: (id: number) => void;
    moneyFormatter: Intl.NumberFormat;
}

export default function CartDialog({ cart, quantityOnChange, removeFromCart, moneyFormatter }: cartProps) {
    return (
        <DialogContent className="lg:max-w-2xl">
            <DialogHeader>
                <DialogTitle>Cart</DialogTitle>
                <DialogDescription>Order Summary</DialogDescription>
            </DialogHeader>
            <div className="max-h-100 overflow-y-auto ">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Item Name</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="text-right">SubTotal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {cart.map(item => (
                            <TableRow>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>
                                    <div className="flex gap-3 items-center">
                                        <Button size={"sm"} variant={"ghost"} onClick={() => quantityOnChange(item.id!, -1)}>-</Button>
                                        <p>{item.quantitySelected}</p>
                                        <Button size={"sm"} variant={"ghost"} onClick={() => quantityOnChange(item.id!, 1)}>+</Button>
                                    </div>
                                </TableCell>
                                <TableCell>{moneyFormatter.format(item.price)}</TableCell>
                                <TableCell className="text-right">{moneyFormatter.format(item.price * item.quantitySelected)}</TableCell>
                                <TableCell className="pl-5">
                                    <Button
                                        size={"icon-sm"}
                                        variant={"destructive"}
                                        onClick={() => removeFromCart(item.id!)}>
                                        <Trash />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    {cart.length > 0
                        &&
                        (<TableFooter>
                            <TableRow>
                                <TableCell colSpan={3}>Total</TableCell>
                                <TableCell className="text-right">
                                    {
                                        moneyFormatter.format(
                                            cart.reduce(
                                                (acc, item) => (item.price * item.quantitySelected) + acc, 0)
                                        )
                                    }
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableFooter>)
                    }
                </Table>
            </div>
        </DialogContent >
    )
}