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
      "all-upcoming-events": {
        Row: {
          created_at: string
          date: string | null
          description: string | null
          game: Database["public"]["Enums"]["Game"] | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          date?: string | null
          description?: string | null
          game?: Database["public"]["Enums"]["Game"] | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          date?: string | null
          description?: string | null
          game?: Database["public"]["Enums"]["Game"] | null
          id?: number
          name?: string | null
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
