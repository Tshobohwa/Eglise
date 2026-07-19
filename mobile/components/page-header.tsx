import React, { Children, useState } from "react";
import { View } from "react-native";
import PageTitle from "./ui/page-title";

export default function PageHeader({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 10, gap: 10 }}>
      <PageTitle>{title}</PageTitle>
      <View style={{ gap: 10, width: "100%" }}>{children}</View>
    </View>
  );
}
