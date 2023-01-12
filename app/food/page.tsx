"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Categories from "../../components/categories/Categories";
import SearchFood from "../../components/searchFood/SearchFood";
import { getCategories, ICategories } from "../../lib/api";

function SearchFoodPage() {
  //categories 리액트쿼리로 데이터 가져와서 버튼만들기
  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useQuery<ICategories[]>(["categories"], getCategories);

  return (
    <div>
      <SearchFood />
      <Categories
        categories={categories}
        categoriesLoading={categoriesLoading}
        categoriesError={categoriesError}
      />
    </div>
  );
}

export default SearchFoodPage;
