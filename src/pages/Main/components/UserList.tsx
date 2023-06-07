import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import { useGlobalState } from "../../../App";
import { FlexBetween } from "../../../components/primitives";
import UserListItem from "./UserListItem";

const PER_PAGE = [
  { label: 5, value: 5 },
  { label: 10, value: 10 },
  { label: 15, value: 15 },
];

type Order = {
  path: string;
  order: "asc" | "desc";
};

const UserList = () => {
  const [userToDelete, setUserToDelete] = useState<UserItem | null>(null);
  const [curPage, setCurPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [sortList, setSortList] = useState<Order>({
    path: "firstName",
    order: "asc",
  });

  const { userList } = useGlobalState();

  // order change
  const handleOrderChange = (path: string) => {
    if (sortList.order === "asc") {
      setSortList({ path, order: "desc" });
    } else {
      setSortList({ path, order: "asc" });
    }
  };

  // pagination controll
  const handlePageChange = (newPage: number) => {
    setCurPage(newPage);
  };

  const handlePrevPage = () => {
    setCurPage((prevPage) => prevPage - 1);
  };
  const handleNextPage = () => {
    setCurPage((prevPage) => prevPage + 1);
  };

  // modals open
  const handleAddModalOpen = () => {
    setIsAddModalOpen(true);
  };

  const handleDeleteModalOpen = () => {
    setDeleteModalOpen(true);
  };
  const handleSetUserToDelete = (user: UserItem) => {
    setUserToDelete(user);
  };

  return (
    <Box>
      <FlexBetween>
        <Button onClick={handleAddModalOpen}>Add </Button>
      </FlexBetween>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={4}>
          <Typography
            variant="h3"
            onClick={() => handleOrderChange("firstName")}
          >
            User{" "}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            variant="h3"
            onClick={() => handleOrderChange("firstName")}
          >
            Role{" "}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant="h3"
            onClick={() => handleOrderChange("firstName")}
          >
            Actions{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={1} />
      </Grid>
      {userList.map((user) => (
        <UserListItem
          key={user.id}
          user={user}
          handleDeleteModalOpen={handleDeleteModalOpen}
          handleSetUserToDelete={handleSetUserToDelete}
        />
      ))}
    </Box>
  );
};

export default UserList;
