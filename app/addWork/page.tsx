// ParentComponent.tsx
"use client"; // This is a client component 👈🏽

import AddWork from "@/components/AddWork";
import React, { useState } from "react";
import PhotoGalleryParent from "../../components/PhotoGalleryParent";
import Layout from "@/components/Layout";

const page: React.FC = () => {
  return (
    <Layout>
      <div className="pb-20">
        {/* <PhotoGalleryParent /> */}
        <AddWork />
      </div>
    </Layout>
  );
};

export default page;
