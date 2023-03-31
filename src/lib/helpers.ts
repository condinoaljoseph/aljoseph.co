import { format } from "date-fns";
import { allPosts } from "../../.contentlayer/generated";

export function formatReadingTime(minutes: number) {
  const cups = Math.round(minutes / 5);

  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill("🍱")
      .join("")} ${minutes} min read`;
  }

  return `${new Array(cups || 1).fill("☕️").join("")} ${Math.ceil(
    minutes
  )} min read`;
}

export function formatPostDate(date: string) {
  return format(new Date(date), "MMM d, y");
}

export function getPagination(pageSlug: string) {
  const slugs = allPosts.map(({ slug }) => slug);
  const postsTitle = allPosts.map(({ title }) => title);

  const totalPages = allPosts.length;
  const current = slugs.indexOf(pageSlug) + 1;

  let prev = current > 1 ? current - 1 : undefined;
  let next = current < totalPages ? current + 1 : undefined;

  return {
    prevPage: {
      url: prev !== undefined ? slugs[prev - 1] || null : null,
      title: prev !== undefined ? postsTitle[prev - 1] || null : null,
    },
    nextPage: {
      url: next !== undefined ? slugs[next - 1] || null : null,
      title: next !== undefined ? postsTitle[next - 1] || null : null,
    },
  };
}
