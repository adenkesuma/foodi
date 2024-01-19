import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
  const [menu, isPending, refetch] = useMenu();
  console.log(menu)

  return (
    <div>ManageItems</div>
  )
}

export default ManageItems;
