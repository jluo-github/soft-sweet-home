import EmptyList from "@/components/global/EmptyList";
import { fetchAdminProducts } from "@/utils/actions";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/utils/format";
import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";
import { deleteProductAction } from "@/utils/actions";

const DeleteProduct = ({ productId }: { productId: string }) => {
  const handleDelete = deleteProductAction.bind(null, { productId });


  return (
    <FormContainer action={handleDelete}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
};

const ProductsPage = async () => {
  const products = await fetchAdminProducts();
  if (!products.length) return <EmptyList />;

  return (
    <>
      {/* table */}
      <Table>
        <TableCaption className='capitalize'>
          total products : {products.length}
        </TableCaption>

        {/* table herder */}
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        {/* table body*/}
        <TableBody>
          {products.map((product) => {
            const { id, name, company, price } = product;
            // table row

            return (
              <TableRow key={id}>
                <TableCell>
                  <Link
                    className='underline text-muted-foreground tacking-wide capitalize'
                    href={`/products/${id}`}>
                    {name}
                  </Link>
                </TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{formatCurrency(price)}</TableCell>
                <TableCell className='flex items-center gap-x-2'>
                  <Link href={`/admin/products/${id}/edit`}>
                    <IconButton actionType='edit'></IconButton>
                  </Link>
                  <DeleteProduct productId={id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
export default ProductsPage;
