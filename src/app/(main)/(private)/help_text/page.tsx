import { TextService } from "@/app/infrastructure/services";
import { ManageUser } from "@/ui/atoms";

import { DashboardSectionOrganisms } from "@/ui/organisms";

export default async function DashboardView() {
  const response = await TextService.getTexts();
  const categories = await TextService.getCategories();
  const subcategories = await TextService.getSubcategories();

  if (response.statusCode >= 400 || !categories || !subcategories) {
    return (
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        Error to get text, cetegories or subcategories!
      </div>
    );
  }
  return (
    <ManageUser>
      <DashboardSectionOrganisms
        response={response}
        categories={categories}
        subcategories={subcategories}
      />
    </ManageUser>
  );
}
