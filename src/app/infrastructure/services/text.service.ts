import { IResponse } from "@/app/core/application/dto";
import { UtilInfrastructure } from "../utils/util.infrastructure";
import {
  ITextResponse,
  ITextResponseComplete,
} from "@/app/core/application/dto/textResponse";
import { IText } from "@/app/core/application/interfaces";

class TextService {
  private utilInfrastructure: UtilInfrastructure;

  constructor() {
    this.utilInfrastructure = new UtilInfrastructure();
  }

  public async getTexts(): Promise<ITextResponseComplete> {
    try {
      const data = await this.utilInfrastructure.get<ITextResponseComplete>(
        "texts"
      );
      console.log("data", data);
      return data;
    } catch (error: unknown) {
      throw error;
    }
  }

  public async getCategories(): Promise<string[]> {
    try {
      const response = await this.utilInfrastructure.get<ITextResponseComplete>(
        "texts"
      );
      const categories = Object.entries(response.data).map(
        ([, value]) => value.category
      );
      return categories;
    } catch (error: unknown) {
      throw error;
    }
  }

  public async getSubcategories(): Promise<string[]> {
    try {
      const response = await this.utilInfrastructure.get<ITextResponseComplete>(
        "texts"
      );
      const subCategories = Object.entries(response.data).map(
        ([, value]) => value.subcategory
      );
      return subCategories;
    } catch (error: unknown) {
      throw error;
    }
  }

  public async createText(request: IText): Promise<IResponse<ITextResponse>> {
    try {
      const response = await this.utilInfrastructure.post<
        IText,
        IResponse<ITextResponse>
      >("texts", request);
      console.log("response createtext", response);
      return response;
    } catch (error: unknown) {
      throw error;
    }
  }

  public async deleteText(id: string): Promise<IResponse<ITextResponse>> {
    try {
      const response = await this.utilInfrastructure.delete<
        IResponse<ITextResponse>
      >("texts", id);
      console.log("response delete text", response);
      return response;
    } catch (error: unknown) {
      throw error;
    }
  }
}

const organizationService = new TextService();
export default organizationService;
