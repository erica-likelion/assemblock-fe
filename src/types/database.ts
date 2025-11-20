// 데이터베이스 스키마에 맞춘 타입 정의

// Reviews 테이블
export interface ReviewData {
  review_id: number;
  user_id: number;
  reviewed_id: number;
  project_id: number;
  review: string;
  created_at: string;
}

// Projects 테이블
export interface Project {
  project_id: number;
  proposal_id: number;
  proposer_id: number;
  project_status: string; // ENUM
  project_recruit: number;
  project_accpeted: number; // 스키마에 맞춤
  created_at: string;
}

// Project_members 테이블
export interface ProjectMember {
  member_id: number;
  project_id: number;
  proposal_id: number;
  proposer_id: number;
  user_id: number;
  member_role: string;
  is_proposer: boolean;
}

// Proposals 테이블
export interface Proposal {
  proposal_id: number;
  proposer_id: number;
  discord_id: string;
  recruit_start_date: string;
  recruit_end_date: string;
  recruit_status: string;
  created_at: string;
  project_title: string;
  project_memo: string;
}

// Proposal_targets 테이블
export interface ProposalTarget {
  proposal_id: number;
  proposer_id: number;
  proposalblock_id: number;
  response_status: string;
}

// Blocks 테이블 (이미 MyBlockCard.tsx에 있지만 여기에도 정의)
export interface Block {
  block_id: number;
  user_id: number;
  category_name?: string | null;
  block_title: string;
  block_type: 'IDEA' | 'TECHNOLOGY';
  contribution_score?: number | null; // 0-10
  tools_text?: string | null;
  oneline_summary: string;
  improvement_point?: string | null;
  result_url?: string | null;
  result_file?: string | null;
  created_at: string;
}

// Boards 테이블
export interface Board {
  board_id: number;
  user_id: number;
  board_name: string;
  board_memo?: string | null;
  created_at: string;
}

// Board_blocks 테이블
export interface BoardBlock {
  connect_id: number;
  block_id: number;
  board_id: number;
  created_at: string;
}

// Tech_parts 테이블
export interface TechPart {
  tech_id: number;
  tech_name: string;
}

// Block_techparts 테이블
export interface BlockTechPart {
  block_id: number;
  techpart_id: number;
}

