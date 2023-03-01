import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { ICategories } from "../../lib/api";
import styles from "./Button.module.css";

function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick: any;
}) {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
}

function ButtonLink({
  link,
  children,
  className,
}: {
  link: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Link href={link} className={clsx(styles.buttonLink, className)}>
        {children}
      </Link>
    </>
  );
}

function ButtonCatgeory({
  category,
  children,
  onClickHandler,
}: {
  category: ICategories;
  children: React.ReactNode;
  onClickHandler: any;
}) {
  // console.log(children);

  return (
    <>
      <button
        type="button"
        className={styles.buttonCatgeory}
        onClick={() => onClickHandler(category.strCategory)} //함수를 호출? 내가 선택한 타겟을 받아서 그다음 실행, () => {}
      >
        {children}
      </button>
    </>
  );
}

export { Button, ButtonLink, ButtonCatgeory };
