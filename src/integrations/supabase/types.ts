export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      companies: {
        Row: {
          created_at: string | null
          currency: string | null
          description: string | null
          employees: number | null
          exchange: string | null
          headquarters: string | null
          id: string
          industry: string | null
          logo_url: string | null
          market_cap: number | null
          name: string
          sector: string | null
          ticker: string
          updated_at: string | null
          website: string | null
        }
        Insert: {
          created_at?: string | null
          currency?: string | null
          description?: string | null
          employees?: number | null
          exchange?: string | null
          headquarters?: string | null
          id?: string
          industry?: string | null
          logo_url?: string | null
          market_cap?: number | null
          name: string
          sector?: string | null
          ticker: string
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          created_at?: string | null
          currency?: string | null
          description?: string | null
          employees?: number | null
          exchange?: string | null
          headquarters?: string | null
          id?: string
          industry?: string | null
          logo_url?: string | null
          market_cap?: number | null
          name?: string
          sector?: string | null
          ticker?: string
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      competitor_relationships: {
        Row: {
          company_id: string | null
          comparison_metrics: Json | null
          competitor_id: string | null
          id: string
          last_analyzed: string | null
          relationship_type: string
          similarity_score: number | null
        }
        Insert: {
          company_id?: string | null
          comparison_metrics?: Json | null
          competitor_id?: string | null
          id?: string
          last_analyzed?: string | null
          relationship_type: string
          similarity_score?: number | null
        }
        Update: {
          company_id?: string | null
          comparison_metrics?: Json | null
          competitor_id?: string | null
          id?: string
          last_analyzed?: string | null
          relationship_type?: string
          similarity_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "competitor_relationships_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "competitor_relationships_competitor_id_fkey"
            columns: ["competitor_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      financial_metrics: {
        Row: {
          company_id: string | null
          created_at: string | null
          debt_to_equity: number | null
          eps: number | null
          gross_profit: number | null
          id: string
          net_income: number | null
          operating_income: number | null
          pb_ratio: number | null
          pe_ratio: number | null
          period_date: string
          period_type: string
          revenue: number | null
          roa: number | null
          roe: number | null
          shareholders_equity: number | null
          total_assets: number | null
          total_liabilities: number | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          debt_to_equity?: number | null
          eps?: number | null
          gross_profit?: number | null
          id?: string
          net_income?: number | null
          operating_income?: number | null
          pb_ratio?: number | null
          pe_ratio?: number | null
          period_date: string
          period_type: string
          revenue?: number | null
          roa?: number | null
          roe?: number | null
          shareholders_equity?: number | null
          total_assets?: number | null
          total_liabilities?: number | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          debt_to_equity?: number | null
          eps?: number | null
          gross_profit?: number | null
          id?: string
          net_income?: number | null
          operating_income?: number | null
          pb_ratio?: number | null
          pe_ratio?: number | null
          period_date?: string
          period_type?: string
          revenue?: number | null
          roa?: number | null
          roe?: number | null
          shareholders_equity?: number | null
          total_assets?: number | null
          total_liabilities?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "financial_metrics_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      news_sentiment: {
        Row: {
          article_url: string | null
          author: string | null
          company_id: string | null
          created_at: string | null
          headline: string
          id: string
          impact_score: number | null
          published_at: string
          sentiment_label: string | null
          sentiment_score: number | null
          source: string
          summary: string | null
        }
        Insert: {
          article_url?: string | null
          author?: string | null
          company_id?: string | null
          created_at?: string | null
          headline: string
          id?: string
          impact_score?: number | null
          published_at: string
          sentiment_label?: string | null
          sentiment_score?: number | null
          source: string
          summary?: string | null
        }
        Update: {
          article_url?: string | null
          author?: string | null
          company_id?: string | null
          created_at?: string | null
          headline?: string
          id?: string
          impact_score?: number | null
          published_at?: string
          sentiment_label?: string | null
          sentiment_score?: number | null
          source?: string
          summary?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "news_sentiment_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      sec_filings: {
        Row: {
          accession_number: string
          company_id: string | null
          created_at: string | null
          document_url: string | null
          filing_date: string
          filing_type: string
          financial_highlights: Json | null
          form_type: string | null
          id: string
          key_insights: Json | null
          processed: boolean | null
          processing_status: string | null
          report_date: string | null
          risk_factors: string[] | null
        }
        Insert: {
          accession_number: string
          company_id?: string | null
          created_at?: string | null
          document_url?: string | null
          filing_date: string
          filing_type: string
          financial_highlights?: Json | null
          form_type?: string | null
          id?: string
          key_insights?: Json | null
          processed?: boolean | null
          processing_status?: string | null
          report_date?: string | null
          risk_factors?: string[] | null
        }
        Update: {
          accession_number?: string
          company_id?: string | null
          created_at?: string | null
          document_url?: string | null
          filing_date?: string
          filing_type?: string
          financial_highlights?: Json | null
          form_type?: string | null
          id?: string
          key_insights?: Json | null
          processed?: boolean | null
          processing_status?: string | null
          report_date?: string | null
          risk_factors?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "sec_filings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_data: {
        Row: {
          change_amount: number | null
          change_percent: number | null
          company_id: string | null
          created_at: string | null
          data_timestamp: string
          day_high: number | null
          day_low: number | null
          id: string
          market_cap: number | null
          price: number
          volume: number | null
          year_high: number | null
          year_low: number | null
        }
        Insert: {
          change_amount?: number | null
          change_percent?: number | null
          company_id?: string | null
          created_at?: string | null
          data_timestamp: string
          day_high?: number | null
          day_low?: number | null
          id?: string
          market_cap?: number | null
          price: number
          volume?: number | null
          year_high?: number | null
          year_low?: number | null
        }
        Update: {
          change_amount?: number | null
          change_percent?: number | null
          company_id?: string | null
          created_at?: string | null
          data_timestamp?: string
          day_high?: number | null
          day_low?: number | null
          id?: string
          market_cap?: number | null
          price?: number
          volume?: number | null
          year_high?: number | null
          year_low?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "stock_data_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
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
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
