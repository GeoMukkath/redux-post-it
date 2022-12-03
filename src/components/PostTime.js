import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

const PostTime = ({ timestamp }) => {
  console.log(timestamp);
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return <span>{timeAgo}</span>;
};

export default PostTime;
