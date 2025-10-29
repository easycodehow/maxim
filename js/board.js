import { supabase } from './supabase.js';

// DOM 요소
const writeBtn = document.getElementById('writeBtn');
const writeModal = document.getElementById('writeModal');
const viewModal = document.getElementById('viewModal');
const postForm = document.getElementById('postForm');
const postList = document.getElementById('postList');
const closeBtn = document.querySelector('.close');
const closeViewBtn = document.querySelector('.close-view');
const cancelBtn = document.getElementById('cancelBtn');
const deleteBtn = document.getElementById('deleteBtn');

let currentPostId = null;

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
});

// 글쓰기 모달 열기
writeBtn.addEventListener('click', () => {
    writeModal.style.display = 'block';
});

// 모달 닫기
closeBtn.addEventListener('click', () => {
    writeModal.style.display = 'none';
    postForm.reset();
});

closeViewBtn.addEventListener('click', () => {
    viewModal.style.display = 'none';
    currentPostId = null;
});

cancelBtn.addEventListener('click', () => {
    writeModal.style.display = 'none';
    postForm.reset();
});

// 모달 외부 클릭 시 닫기
window.addEventListener('click', (e) => {
    if (e.target === writeModal) {
        writeModal.style.display = 'none';
        postForm.reset();
    }
    if (e.target === viewModal) {
        viewModal.style.display = 'none';
        currentPostId = null;
    }
});

// 게시글 목록 불러오기
async function loadPosts() {
    try {
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        displayPosts(data);
    } catch (error) {
        console.error('게시글 불러오기 오류:', error);
        postList.innerHTML = `
            <div class="empty-state">
                <p>⚠️ 게시글을 불러올 수 없습니다.</p>
                <p style="font-size: 14px; color: #999;">Supabase 설정을 확인해주세요.</p>
            </div>
        `;
    }
}

// 게시글 목록 표시
function displayPosts(posts) {
    if (!posts || posts.length === 0) {
        postList.innerHTML = `
            <div class="empty-state">
                <p>📝 아직 작성된 게시글이 없습니다.</p>
                <p style="font-size: 14px; color: #999;">첫 번째 글을 작성해보세요!</p>
            </div>
        `;
        return;
    }

    postList.innerHTML = posts.map(post => `
        <div class="post-item" data-id="${post.id}">
            <h3>${escapeHtml(post.title)}</h3>
            <p class="post-preview">${escapeHtml(post.content)}</p>
            <div class="post-meta">
                <span>👤 ${escapeHtml(post.author)}</span>
                <span>📅 ${formatDate(post.created_at)}</span>
            </div>
        </div>
    `).join('');

    // 게시글 클릭 이벤트
    document.querySelectorAll('.post-item').forEach(item => {
        item.addEventListener('click', () => {
            const postId = item.dataset.id;
            viewPost(postId);
        });
    });
}

// 게시글 작성
postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const author = document.getElementById('author').value.trim();

    if (!title || !content || !author) {
        alert('모든 필드를 입력해주세요.');
        return;
    }

    try {
        const { data, error } = await supabase
            .from('posts')
            .insert([
                {
                    title: title,
                    content: content,
                    author: author
                }
            ])
            .select();

        if (error) throw error;

        // 모달 닫기 및 폼 리셋
        writeModal.style.display = 'none';
        postForm.reset();

        // 성공 메시지
        showSuccessMessage('게시글이 작성되었습니다! ✅');

        // 목록 새로고침
        loadPosts();
    } catch (error) {
        console.error('게시글 작성 오류:', error);
        alert('게시글 작성에 실패했습니다. 다시 시도해주세요.');
    }
});

// 게시글 상세보기
async function viewPost(postId) {
    try {
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .eq('id', postId)
            .single();

        if (error) throw error;

        currentPostId = postId;

        document.getElementById('detailTitle').textContent = data.title;
        document.getElementById('detailAuthor').innerHTML = `👤 ${escapeHtml(data.author)}`;
        document.getElementById('detailDate').innerHTML = `📅 ${formatDate(data.created_at)}`;
        document.getElementById('detailContent').textContent = data.content;

        viewModal.style.display = 'block';
    } catch (error) {
        console.error('게시글 불러오기 오류:', error);
        alert('게시글을 불러올 수 없습니다.');
    }
}

// 게시글 삭제
deleteBtn.addEventListener('click', async () => {
    if (!currentPostId) return;

    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
        const { error } = await supabase
            .from('posts')
            .delete()
            .eq('id', currentPostId);

        if (error) throw error;

        viewModal.style.display = 'none';
        currentPostId = null;

        showSuccessMessage('게시글이 삭제되었습니다. ✅');
        loadPosts();
    } catch (error) {
        console.error('게시글 삭제 오류:', error);
        alert('게시글 삭제에 실패했습니다.');
    }
});

// 날짜 포맷팅
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}.${month}.${day} ${hours}:${minutes}`;
}

// HTML 이스케이프 (XSS 방지)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 성공 메시지 표시
function showSuccessMessage(message) {
    const messageEl = document.createElement('div');
    messageEl.className = 'success-message';
    messageEl.textContent = message;
    document.body.appendChild(messageEl);

    setTimeout(() => {
        messageEl.remove();
    }, 3000);
}
