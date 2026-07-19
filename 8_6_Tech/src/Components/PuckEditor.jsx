import React from "react";
import { Puck } from "@puckeditor/core";
import "@puckeditor/core/dist/index.css";

import puckConfig from "./admin_puck-config";

const initialData = {
  content: [],
  root: {},
};

export default function PuckEditor() {
  return (
    <Puck
      config={puckConfig}
      data={initialData}
      onPublish={(data) => {
        console.log("Publish:", data);
      }}
    />
  );
}