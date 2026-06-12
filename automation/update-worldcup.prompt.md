你正在 /projects/world-cup-2026 仓库中执行每日自动化。

目标：
1. 联网核对 2026 世界杯最新赛程和已结束比赛赛果。
2. 更新 `frontend/src/matches.js`：
   - 已结束比赛只更新 `actual.status`、`actual.score`、`actual.updatedAt`。
   - 必须保留已有 `prediction`，不要覆盖赛前预测。
   - 为当天尚未开始或即将开始的比赛补充预测和详情页入口。
3. 若新增比赛，补充 `frontend/matches/*.html` 和 `frontend/vite.config.js` 多页入口。
4. 运行 `cd frontend && npm run build`。
5. 如有实际改动，提交并推送到 `origin main`。

约束：
- 默认日期口径使用北京时间。
- 必须使用真实赛果和赛程，不要猜测已结束比分。
- 只修改与比赛数据、页面入口、前端展示直接相关的文件。
- 不要提交 `.codex/`、`.sparky/`、`frontend/node_modules/`、`frontend/dist/`。
- 提交信息格式使用仓库规范，例如：`chore: 更新每日赛果与预测`。
- 如果没有新赛果或新预测要更新，直接说明无变更，不要创建空提交。
