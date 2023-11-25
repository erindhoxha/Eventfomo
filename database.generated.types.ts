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
      events: {
        Row: {
          description: string | null
          ends_at: string | null
          game_id: string
          id: number
          name: string
          starts_at: string
        }
        Insert: {
          description?: string | null
          ends_at?: string | null
          game_id: string
          id?: number
          name: string
          starts_at: string
        }
        Update: {
          description?: string | null
          ends_at?: string | null
          game_id?: string
          id?: number
          name?: string
          starts_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          }
        ]
      }
      games: {
        Row: {
          description: string | null
          id: string
          name: string
        }
        Insert: {
          description?: string | null
          id: string
          name: string
        }
        Update: {
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      user_event_subscriptions: {
        Row: {
          event_id: number
          id: number
          user_id: string
        }
        Insert: {
          event_id: number
          id?: number
          user_id: string
        }
        Update: {
          event_id?: number
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_event_subscriptions_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          }
        ]
      }
      user_game_subscriptions: {
        Row: {
          game_id: string
          id: number
          user_id: string
        }
        Insert: {
          game_id: string
          id?: number
          user_id: string
        }
        Update: {
          game_id?: string
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_game_subscriptions_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          }
        ]
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
