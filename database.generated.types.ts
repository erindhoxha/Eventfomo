export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      "all-ongoing-events": {
        Row: {
          created_at: string
          date: string
          description: string
          game: Database["public"]["Enums"]["Game"]
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          date: string
          description: string
          game: Database["public"]["Enums"]["Game"]
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          date?: string
          description?: string
          game?: Database["public"]["Enums"]["Game"]
          id?: number
          name?: string
        }
        Relationships: []
      }
      "all-previous-events": {
        Row: {
          created_at: string
          date: string
          description: string
          game: Database["public"]["Enums"]["Game"]
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          date: string
          description: string
          game: Database["public"]["Enums"]["Game"]
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          date?: string
          description?: string
          game?: Database["public"]["Enums"]["Game"]
          id?: number
          name?: string
        }
        Relationships: []
      }
      "all-upcoming-events": {
        Row: {
          created_at: string
          date: string
          description: string
          game: Database["public"]["Enums"]["Game"]
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          date: string
          description: string
          game: Database["public"]["Enums"]["Game"]
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          date?: string
          description?: string
          game?: Database["public"]["Enums"]["Game"]
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      Game: "dota" | "lol" | "wow" | "chess" | "csgo"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
