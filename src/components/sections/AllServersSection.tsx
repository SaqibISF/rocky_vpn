"use client";

import React, { FC, useMemo, useState } from "react";
import Section from "./Section";
import {
  getKeyValue,
  Image,
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { GET_SERVERS_ROUTE } from "@/lib/constants";
import useSWR from "swr";
import { VPN_SERVER } from "@/types";
import { CheckedIcon } from "@/icons";

const fetcher = (...args: [RequestInfo | URL, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

const AllServersSection: FC = () => {
  const [page, setPage] = useState(1);

  const { data: servers, isLoading } = useSWR<{
    data: VPN_SERVER[];
    meta: { total: number; per_page: number };
  }>(GET_SERVERS_ROUTE(page), fetcher, {
    keepPreviousData: true,
  });

  const rowsPerPage = servers?.meta.per_page ?? 10;

  const pages = useMemo(() => {
    return servers?.meta.total
      ? Math.ceil(servers.meta.total / rowsPerPage)
      : 0;
  }, [servers?.meta.total, rowsPerPage]);

  const loadingState =
    isLoading || servers?.data.length === 0 ? "loading" : "idle";

  return (
    <Section heading="All Servers Location" isLeftCornerGradient>
      <div
        className="w-full"
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="25"
      >
        <Table
          aria-label="VPN Servers"
          bottomContent={
            pages > 1 ? (
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
          classNames={{ th: "text-white bg-primary", wrapper: "bg-opacity-40" }}
        >
          <TableHeader>
            <TableColumn key="name">Country</TableColumn>
            <TableColumn key="sub_server">City</TableColumn>
            <TableColumn key="ad_block">AdBlock</TableColumn>
            <TableColumn key="threat_block">Threat Block</TableColumn>
            <TableColumn key="status">Status</TableColumn>
          </TableHeader>
          <TableBody
            items={servers?.data ?? []}
            loadingContent={<Spinner />}
            loadingState={loadingState}
            emptyContent="No Servers Found"
          >
            {(item) => (
              <TableRow key={item?.name}>
                {(columnKey) => (
                  <TableCell className="capitalize">
                    {columnKey === "name" ? (
                      <div className="min-w-32 flex sm:flex-row flex-col sm:items-center gap-y-2 gap-x-10">
                        <Image
                          alt={item.name}
                          src={item.image_url}
                          className="w-9 h-7 rounded-md"
                        />
                        {item.name}
                      </div>
                    ) : columnKey === "sub_server" ? (
                      item.sub_server.name
                    ) : columnKey === "ad_block" ||
                      columnKey === "threat_block" ? (
                      <CheckedIcon />
                    ) : (
                      getKeyValue(item, columnKey)
                    )}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </Section>
  );
};

export default AllServersSection;
