export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      audit_log: {
        Row: {
          action: string
          actor_id: string | null
          after: Json | null
          before: Json | null
          created_at: string
          entity_id: string | null
          entity_type: Database["public"]["Enums"]["entity_type"] | null
          id: string
        }
        Insert: {
          action: string
          actor_id?: string | null
          after?: Json | null
          before?: Json | null
          created_at?: string
          entity_id?: string | null
          entity_type?: Database["public"]["Enums"]["entity_type"] | null
          id?: string
        }
        Update: {
          action?: string
          actor_id?: string | null
          after?: Json | null
          before?: Json | null
          created_at?: string
          entity_id?: string | null
          entity_type?: Database["public"]["Enums"]["entity_type"] | null
          id?: string
        }
        Relationships: []
      }
      ayahs: {
        Row: {
          arabic: string
          audio_url: string | null
          ayah_number: number
          created_at: string
          id: string
          revelation_reason: string | null
          search_vector: unknown
          short_tafsir: string | null
          sources: string[] | null
          status: Database["public"]["Enums"]["content_status"]
          surah_name: string
          surah_number: number
          translation: string
          transliteration: string | null
          updated_at: string
        }
        Insert: {
          arabic: string
          audio_url?: string | null
          ayah_number: number
          created_at?: string
          id?: string
          revelation_reason?: string | null
          search_vector?: unknown
          short_tafsir?: string | null
          sources?: string[] | null
          status?: Database["public"]["Enums"]["content_status"]
          surah_name: string
          surah_number: number
          translation: string
          transliteration?: string | null
          updated_at?: string
        }
        Update: {
          arabic?: string
          audio_url?: string | null
          ayah_number?: number
          created_at?: string
          id?: string
          revelation_reason?: string | null
          search_vector?: unknown
          short_tafsir?: string | null
          sources?: string[] | null
          status?: Database["public"]["Enums"]["content_status"]
          surah_name?: string
          surah_number?: number
          translation?: string
          transliteration?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          icon: string | null
          id: string
          slug: string
          sort_order: number
          span: string | null
          title: string
          updated_at: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          slug: string
          sort_order?: number
          span?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          slug?: string
          sort_order?: number
          span?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      duas: {
        Row: {
          arabic: string
          audio_url: string | null
          created_at: string
          id: string
          search_vector: unknown
          source: string | null
          status: Database["public"]["Enums"]["content_status"]
          title: string
          translation: string
          transliteration: string | null
          updated_at: string
          when_to_recite: string | null
        }
        Insert: {
          arabic: string
          audio_url?: string | null
          created_at?: string
          id?: string
          search_vector?: unknown
          source?: string | null
          status?: Database["public"]["Enums"]["content_status"]
          title: string
          translation: string
          transliteration?: string | null
          updated_at?: string
          when_to_recite?: string | null
        }
        Update: {
          arabic?: string
          audio_url?: string | null
          created_at?: string
          id?: string
          search_vector?: unknown
          source?: string | null
          status?: Database["public"]["Enums"]["content_status"]
          title?: string
          translation?: string
          transliteration?: string | null
          updated_at?: string
          when_to_recite?: string | null
        }
        Relationships: []
      }
      hadiths: {
        Row: {
          arabic: string | null
          collection: string
          commentary: string | null
          created_at: string
          grade: Database["public"]["Enums"]["hadith_grade"]
          id: string
          narrator: string | null
          number: string | null
          search_vector: unknown
          source: string | null
          status: Database["public"]["Enums"]["content_status"]
          translation: string
          updated_at: string
        }
        Insert: {
          arabic?: string | null
          collection: string
          commentary?: string | null
          created_at?: string
          grade?: Database["public"]["Enums"]["hadith_grade"]
          id?: string
          narrator?: string | null
          number?: string | null
          search_vector?: unknown
          source?: string | null
          status?: Database["public"]["Enums"]["content_status"]
          translation: string
          updated_at?: string
        }
        Update: {
          arabic?: string | null
          collection?: string
          commentary?: string | null
          created_at?: string
          grade?: Database["public"]["Enums"]["hadith_grade"]
          id?: string
          narrator?: string | null
          number?: string | null
          search_vector?: unknown
          source?: string | null
          status?: Database["public"]["Enums"]["content_status"]
          translation?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          country: string | null
          created_at: string
          display_name: string | null
          id: string
          language: string
          settings: Json
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          country?: string | null
          created_at?: string
          display_name?: string | null
          id: string
          language?: string
          settings?: Json
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          country?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          language?: string
          settings?: Json
          updated_at?: string
        }
        Relationships: []
      }
      study_plan_days: {
        Row: {
          ayah_ids: string[] | null
          day_number: number
          description: string | null
          dua_ids: string[] | null
          hadith_ids: string[] | null
          id: string
          plan_id: string
          quiz: Json | null
          title: string
          topic_id: string | null
        }
        Insert: {
          ayah_ids?: string[] | null
          day_number: number
          description?: string | null
          dua_ids?: string[] | null
          hadith_ids?: string[] | null
          id?: string
          plan_id: string
          quiz?: Json | null
          title: string
          topic_id?: string | null
        }
        Update: {
          ayah_ids?: string[] | null
          day_number?: number
          description?: string | null
          dua_ids?: string[] | null
          hadith_ids?: string[] | null
          id?: string
          plan_id?: string
          quiz?: Json | null
          title?: string
          topic_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "study_plan_days_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "study_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "study_plan_days_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
        ]
      }
      study_plans: {
        Row: {
          created_at: string
          description: string | null
          duration_days: number
          id: string
          image_url: string | null
          level: string | null
          slug: string
          status: Database["public"]["Enums"]["content_status"]
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration_days: number
          id?: string
          image_url?: string | null
          level?: string | null
          slug: string
          status?: Database["public"]["Enums"]["content_status"]
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          duration_days?: number
          id?: string
          image_url?: string | null
          level?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["content_status"]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      tafsirs: {
        Row: {
          author: string
          ayah_id: string
          created_at: string
          depth: string
          id: string
          search_vector: unknown
          source: string | null
          text: string
          title: string | null
          updated_at: string
        }
        Insert: {
          author: string
          ayah_id: string
          created_at?: string
          depth?: string
          id?: string
          search_vector?: unknown
          source?: string | null
          text: string
          title?: string | null
          updated_at?: string
        }
        Update: {
          author?: string
          ayah_id?: string
          created_at?: string
          depth?: string
          id?: string
          search_vector?: unknown
          source?: string | null
          text?: string
          title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tafsirs_ayah_id_fkey"
            columns: ["ayah_id"]
            isOneToOne: false
            referencedRelation: "ayahs"
            referencedColumns: ["id"]
          },
        ]
      }
      topic_ayahs: {
        Row: {
          ayah_id: string
          sort_order: number | null
          topic_id: string
        }
        Insert: {
          ayah_id: string
          sort_order?: number | null
          topic_id: string
        }
        Update: {
          ayah_id?: string
          sort_order?: number | null
          topic_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "topic_ayahs_ayah_id_fkey"
            columns: ["ayah_id"]
            isOneToOne: false
            referencedRelation: "ayahs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "topic_ayahs_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
        ]
      }
      topic_duas: {
        Row: {
          dua_id: string
          sort_order: number | null
          topic_id: string
        }
        Insert: {
          dua_id: string
          sort_order?: number | null
          topic_id: string
        }
        Update: {
          dua_id?: string
          sort_order?: number | null
          topic_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "topic_duas_dua_id_fkey"
            columns: ["dua_id"]
            isOneToOne: false
            referencedRelation: "duas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "topic_duas_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
        ]
      }
      topic_hadiths: {
        Row: {
          hadith_id: string
          sort_order: number | null
          topic_id: string
        }
        Insert: {
          hadith_id: string
          sort_order?: number | null
          topic_id: string
        }
        Update: {
          hadith_id?: string
          sort_order?: number | null
          topic_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "topic_hadiths_hadith_id_fkey"
            columns: ["hadith_id"]
            isOneToOne: false
            referencedRelation: "hadiths"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "topic_hadiths_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
        ]
      }
      topic_relations: {
        Row: {
          related_topic_id: string
          topic_id: string
        }
        Insert: {
          related_topic_id: string
          topic_id: string
        }
        Update: {
          related_topic_id?: string
          topic_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "topic_relations_related_topic_id_fkey"
            columns: ["related_topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "topic_relations_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
        ]
      }
      topics: {
        Row: {
          category_id: string | null
          created_at: string
          created_by: string | null
          description: string | null
          icon: string | null
          id: string
          image_url: string | null
          reading_time_min: number | null
          search_vector: unknown
          short_description: string | null
          slug: string
          status: Database["public"]["Enums"]["content_status"]
          title: string
          updated_at: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          image_url?: string | null
          reading_time_min?: number | null
          search_vector?: unknown
          short_description?: string | null
          slug: string
          status?: Database["public"]["Enums"]["content_status"]
          title: string
          updated_at?: string
        }
        Update: {
          category_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          image_url?: string | null
          reading_time_min?: number | null
          search_vector?: unknown
          short_description?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["content_status"]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "topics_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      user_favorites: {
        Row: {
          created_at: string
          entity_id: string
          entity_type: Database["public"]["Enums"]["entity_type"]
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          entity_id: string
          entity_type: Database["public"]["Enums"]["entity_type"]
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          entity_id?: string
          entity_type?: Database["public"]["Enums"]["entity_type"]
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      user_history: {
        Row: {
          entity_id: string
          entity_type: Database["public"]["Enums"]["entity_type"]
          id: string
          user_id: string
          viewed_at: string
        }
        Insert: {
          entity_id: string
          entity_type: Database["public"]["Enums"]["entity_type"]
          id?: string
          user_id: string
          viewed_at?: string
        }
        Update: {
          entity_id?: string
          entity_type?: Database["public"]["Enums"]["entity_type"]
          id?: string
          user_id?: string
          viewed_at?: string
        }
        Relationships: []
      }
      user_notes: {
        Row: {
          content: string
          created_at: string
          entity_id: string
          entity_type: Database["public"]["Enums"]["entity_type"]
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          entity_id: string
          entity_type: Database["public"]["Enums"]["entity_type"]
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          entity_id?: string
          entity_type?: Database["public"]["Enums"]["entity_type"]
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_study_progress: {
        Row: {
          completed: boolean
          completed_at: string | null
          day_number: number
          id: string
          plan_id: string
          quiz_score: number | null
          user_id: string
        }
        Insert: {
          completed?: boolean
          completed_at?: string | null
          day_number: number
          id?: string
          plan_id: string
          quiz_score?: number | null
          user_id: string
        }
        Update: {
          completed?: boolean
          completed_at?: string | null
          day_number?: number
          id?: string
          plan_id?: string
          quiz_score?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_study_progress_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "study_plans"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      admin_list_users: {
        Args: never
        Returns: {
          created_at: string
          display_name: string
          email: string
          id: string
          last_sign_in_at: string
          roles: Database["public"]["Enums"]["app_role"][]
        }[]
      }
      admin_set_role: {
        Args: {
          _grant: boolean
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: undefined
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      log_audit: {
        Args: {
          _action: string
          _after: Json
          _before: Json
          _entity_id: string
          _entity_type: Database["public"]["Enums"]["entity_type"]
        }
        Returns: undefined
      }
      search_all: {
        Args: { lim?: number; q: string }
        Returns: {
          entity_type: string
          id: string
          rank: number
          snippet: string
          title: string
        }[]
      }
    }
    Enums: {
      app_role: "user" | "moderator" | "admin"
      content_status: "draft" | "published" | "archived"
      entity_type: "topic" | "ayah" | "hadith" | "dua" | "tafsir" | "category"
      hadith_grade: "sahih" | "hasan" | "daif" | "maudu" | "unknown"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["user", "moderator", "admin"],
      content_status: ["draft", "published", "archived"],
      entity_type: ["topic", "ayah", "hadith", "dua", "tafsir", "category"],
      hadith_grade: ["sahih", "hasan", "daif", "maudu", "unknown"],
    },
  },
} as const
