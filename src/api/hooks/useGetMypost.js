import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';
import { keys } from "../utils/createQueryKey";
import { apis_token } from "./../../axios/api";

export const useGetMypost = () => {
  const { data } = useQuery({
    queryKey: keys.GET_MYPOST,
    queryFn: async (num) => {
      const data = await apis_token.get(`api/user/mypage?page=${num}`);
      return data.data;
    },
  });

  return {
    myPost: data,
  };
};