import ModulePlaceholder from "@/components/ModulePlaceholder";

export default function ModulePage({ params }: { params: { module: string } }) {
  return <ModulePlaceholder module={params.module} />;
}
