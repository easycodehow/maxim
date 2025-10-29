-- Supabase 데이터베이스 테이블 생성 SQL
-- Supabase Dashboard → SQL Editor에서 실행하세요

-- posts 테이블 생성
CREATE TABLE IF NOT EXISTS posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스 생성 (성능 향상)
CREATE INDEX IF NOT EXISTS posts_created_at_idx ON posts(created_at DESC);

-- RLS (Row Level Security) 활성화
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- 모든 사용자가 게시글을 읽을 수 있도록 설정
CREATE POLICY "Anyone can read posts"
ON posts FOR SELECT
USING (true);

-- 모든 사용자가 게시글을 작성할 수 있도록 설정
CREATE POLICY "Anyone can insert posts"
ON posts FOR INSERT
WITH CHECK (true);

-- 모든 사용자가 게시글을 삭제할 수 있도록 설정
CREATE POLICY "Anyone can delete posts"
ON posts FOR DELETE
USING (true);

-- 확인
SELECT * FROM posts;
