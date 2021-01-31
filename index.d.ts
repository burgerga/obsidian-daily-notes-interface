import type { Moment } from "moment";
import { TFile } from "obsidian";

export interface IPeriodicNoteSettings {
  folder?: string;
  format?: string;
  template?: string;
}

// Errors
export class DailyNotesFolderMissingError extends Error {}
export class WeeklyNotesFolderMissingError extends Error {}

// Utils
export function getDateFromFile(
  file: TFile,
  granularity: "day" | "week" | "month"
): Moment | null;
export function getDateUID(
  date: Moment,
  granularity: "day" | "week" | "month"
): string;
export function getTemplateContents(template: string): Promise<string>;

// Daily
export function appHasDailyNotesPluginLoaded(): boolean;
export function createDailyNote(date: Moment): Promise<TFile>;
export function getDailyNote(
  date: Moment,
  dailyNotes: Record<string, TFile>
): TFile;
export function getAllDailyNotes(): Record<string, TFile>;
export function getDailyNoteSettings(): IPeriodicNoteSettings;

// Weekly
export function appHasWeeklyNotesPluginLoaded(): boolean;
export function createWeeklyNote(date: Moment): Promise<TFile>;
export function getWeeklyNote(
  date: Moment,
  weeklyNotes: Record<string, TFile>
): TFile;
export function getAllWeeklyNotes(): Record<string, TFile>;
export function getWeeklyNoteSettings(): IPeriodicNoteSettings;

// Monthly
export function appHasMonthlyNotesPluginLoaded(): boolean;
export function createMonthlyNote(date: Moment): Promise<TFile>;
export function getMonthlyNote(
  date: Moment,
  weeklyNotes: Record<string, TFile>
): TFile;
export function getAllMonthlyNotes(): Record<string, TFile>;
export function getMonthlyNoteSettings(): IPeriodicNoteSettings;
