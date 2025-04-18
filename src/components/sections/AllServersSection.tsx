"use client";

import React, { FC, useMemo } from "react";
import Section from "./Section";
import {
  getKeyValue,
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
// import axios from "axios";
// import { GET_SERVERS_ROUTE } from "@/lib/constants";
import useSWR from "swr";

const fetcher = (...args: [RequestInfo | URL, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

const AllServersSection: FC = () => {
  const [page, setPage] = React.useState(1);

  const { data, isLoading } = useSWR<{
    count: number;
    results: { [key: string]: string }[];
  }>(`https://swapi.py4e.com/api/people?page=${page}`, fetcher, {
    keepPreviousData: true,
  });

  const rowsPerPage = 10;

  const pages = useMemo(() => {
    return data?.count ? Math.ceil(data.count / rowsPerPage) : 0;
  }, [data?.count, rowsPerPage]);

  const loadingState =
    isLoading || data?.results.length === 0 ? "loading" : "idle";

  //   useEffect(() => {
  //     const fetchServers = async () => {
  //       try {
  //         const res = await axios
  //           .get(GET_SERVERS_ROUTE, {
  //             headers: {
  //               Accept: "application/json",
  //             },
  //           })
  //           .then((res) => res.data);

  //         console.log(res);
  //       } catch (error) {}
  //     };

  //     fetchServers();
  //   }, []);

  return (
    <Section heading="All Servers Location" isLeftCornerGradient>
      <Table
        aria-label="VPN Servers"
        selectionMode="single"
        bottomContent={
          pages > 0 ? (
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          ) : null
        }
      >
        <TableHeader>
          <TableColumn key="name">Name</TableColumn>
          <TableColumn key="height">Height</TableColumn>
          <TableColumn key="mass">Mass</TableColumn>
          <TableColumn key="birth_year">Birth year</TableColumn>
        </TableHeader>
        <TableBody
          items={data?.results ?? []}
          loadingContent={<Spinner />}
          loadingState={loadingState}
          emptyContent="No Servers Found"
        >
          {(item) => (
            <TableRow key={item?.name}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Section>
  );
};

export default AllServersSection;
