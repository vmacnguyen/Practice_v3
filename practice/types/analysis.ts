import { Id } from "../convex/_generated/dataModel";

export interface IdentifiedAction {
  action: string;
  timestamp: string | null;
  analysis: string;
  practiceTips: string[];
}

export interface Analysis {
  _id: Id<"analyses">;
  _creationTime: number;
  userId: Id<"users">;
  videoStorageId: Id<"_storage">;
  videoUrl: string;
  sport: string;
  identifiedActions: IdentifiedAction[];
  overallFeedback: string;
  status: "pending" | "processing" | "completed" | "failed";
  sessionNumber: number;
  errorMessage?: string;
  createdAt: number;
  updatedAt: number;
}
